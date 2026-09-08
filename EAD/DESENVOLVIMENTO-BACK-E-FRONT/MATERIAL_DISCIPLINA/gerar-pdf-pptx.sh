#!/bin/bash
# =============================================================
# Script para converter todos os slides MARP (.md) em PDF e PPTX
# Uso: bash gerar-pdf-pptx.sh
# =============================================================

set -e

BASE_DIR="$(cd "$(dirname "$0")" && pwd)"
MARPCMD="npx --yes @marp-team/marp-cli"

echo "=========================================="
echo " Conversão de slides MARP → PDF e PPTX"
echo "=========================================="
echo ""

# Contadores
total=0
sucesso=0
falha=0

# Percorrer todas as unidades
for unidade_dir in "$BASE_DIR"/UNIDADE_*/; do
  [ -d "$unidade_dir" ] || continue
  unidade_nome=$(basename "$unidade_dir")

  # Criar pastas de saída
  mkdir -p "$unidade_dir/pdf"
  mkdir -p "$unidade_dir/pptx"

  echo "📁 Processando: $unidade_nome"
  echo "------------------------------------------"

  for md_file in "$unidade_dir"/*.md; do
    [ -f "$md_file" ] || continue

    arquivo=$(basename "$md_file" .md)
    total=$((total + 1))

    # --- PDF ---
    echo -n "  📄 $arquivo → PDF ... "
    if $MARPCMD "$md_file" \
        --pdf \
        --allow-local-files \
        --output "$unidade_dir/pdf/${arquivo}.pdf" \
        2>/dev/null; then
      echo "✅"
    else
      echo "❌ (falha no PDF)"
      falha=$((falha + 1))
      continue
    fi

    # --- PPTX ---
    echo -n "  📊 $arquivo → PPTX ... "
    if $MARPCMD "$md_file" \
        --pptx \
        --allow-local-files \
        --output "$unidade_dir/pptx/${arquivo}.pptx" \
        2>/dev/null; then
      echo "✅"
    else
      echo "❌ (falha no PPTX)"
      falha=$((falha + 1))
      continue
    fi

    sucesso=$((sucesso + 1))
  done

  echo ""
done

echo "=========================================="
echo " ✅ Conversão concluída!"
echo "------------------------------------------"
echo " Total de arquivos: $total"
echo " Sucesso:           $sucesso"
echo " Falhas:            $falha"
echo "=========================================="
echo ""
echo "📂 Arquivos gerados:"
echo "   PDF  → UNIDADE_XX/pdf/*.pdf"
echo "   PPTX → UNIDADE_XX/pptx/*.pptx"
