# Your List name
$listname="TODO List"
# You get the componentID form the id field of the 
# FormCustomizerFormCustomizer.manifest.json File
$componentID="5390b044-a499-48d7-a70d-fd4f26139598"
# Item is the default contentype
$contenttypeName="Item"

Set-PnPContentType -Identity $contenttypeName `
-List $listname `
-NewFormClientSideComponentId $componentID `
-EditFormClientSideComponentId $componentID `
-DisplayFormClientSideComponentId $componentID`