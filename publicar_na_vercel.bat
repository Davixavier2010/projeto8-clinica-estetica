@echo off
title Publicar Projeto na Vercel - Agência RIDA
chcp 65001 >nul
cls
echo =======================================================
echo   PUBLICAR PROJETO NA VERCEL - AGENCIA RIDA
echo =======================================================
echo.
echo [1] Deploy em Producao (Link definitivo oficial no ar)
echo [2] Deploy de Teste (Preview)
echo.
set /p op="Escolha a opcao (1 ou 2, padrao 1): "

cd /d "%~dp0"
if "%op%"=="2" (
    echo.
    echo Publicando Preview na Vercel...
    call npx vercel
) else (
    echo.
    echo Publicando em Producao na Vercel...
    call npx vercel --prod
)

echo.
echo =======================================================
echo Processo finalizado!
echo =======================================================
pause
