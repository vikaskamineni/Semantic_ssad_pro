function anno_edit()
{
        if (document.getElementsByTagName("body")[0].contentEditable= "true") 
        {
                document.getElementsByTagName("body")[0].contentEditable= null;
        }
        else
        {
                document.getElementsByTagName("body")[0].setAttribute('contenteditable','true');
        }
}
