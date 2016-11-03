function anno_edit()
{
        if (document.getElementsByTagName("body")[0].contentEditable= "true") 
        {
                document.getElementsByTagName("body")[0].setAtrribute('contenteditable','');
        }
        else
        {
                document.getElementsByTagName("body")[0].setAttribute('contenteditable','true');
        }
}
