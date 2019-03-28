#!/usr/bin/env bash
# Color codes
BLACK='\033[0;30m' RED='\033[0;31m' GREEN='\033[0;32m' BROWN='\033[0;33m' BLUE='\033[0;34m' PURPLE='\033[0;35m' CYAN='\033[0;36m' LIGHTGRAY='\033[0;37m' DARKGRAY='\033[1;30m' LIGHTRED='\033[1;31m' LIGHTGREEN='\033[1;32m' YELLOW='\033[1;33m' LIGHTBLUE='\033[1;34m' LIGHTPURPLE='\033[1;35m' LIGHTCYAN='\033[1;36m' WHITE='\033[1;37m' NC='\033[0m'
# config
LOGPATH=public/data/homev2
DATAPATH=public/data/
d=$(date +%Y%m%d%-H%M)
echo -e "Log file location ==> ${GREEN}$LOGPATH${NC}"
if [ -f ./public/data/homev2 ]; then
    echo -e "${BLUE}[ Log file found ]${NC}"
    echo -e "${YELLOW}Making backup of "$LOGPATH" and renaming it to to  ==> "$DATAPATH$d".log ${NC}"
    cp "$LOGPATH" "$DATAPATH$d".log
else
    echo -e "${RED}No log files in found in logs${NC}"
fi
