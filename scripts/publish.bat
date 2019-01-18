if exist "packages\easy_search" (
    cd packages\easysearch_core
    meteor publish
    cd ..\easysearch_components
    meteor publish --create
    cd ..\easy:search
    meteor publish --create
    cd ..\easysearch_autosuggest
    meteor publish --create
    cd ..\easysearch_elasticsearch
    meteor publish --create
    cd ..\..
)
else (
    echo "Execute in root folder"
)
