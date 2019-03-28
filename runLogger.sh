#!/usr/bin/env bash
# Color codes
BLACK='\033[0;30m' RED='\033[0;31m' GREEN='\033[0;32m' BROWN='\033[0;33m' BLUE='\033[0;34m' PURPLE='\033[0;35m' CYAN='\033[0;36m' LIGHTGRAY='\033[0;37m' DARKGRAY='\033[1;30m' LIGHTRED='\033[1;31m' LIGHTGREEN='\033[1;32m' YELLOW='\033[1;33m' LIGHTBLUE='\033[1;34m' LIGHTPURPLE='\033[1;35m' LIGHTCYAN='\033[1;36m' WHITE='\033[1;37m' NC='\033[0m'
# config
source ./.env
LOGPATH=public/data/homev2
mkdir -p public/data
echo "$LOGPATH"
echo "$HEADER"
echo "" > $LOGPATH && watch -n10 'echo "Time: $(date "+%Y-%m-%d <=> %H:%M:%S sec")" >> '$LOGPATH' && http -v GET http://45.114.84.83:9002/api/irhomev2 '"$HEADER"' | grep "HTTP/" >> '$LOGPATH' && echo "===================" >> '$LOGPATH