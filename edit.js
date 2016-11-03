function anno_edit()
{
        if (document.getElementsByTagName("body")[0].hasAtrribute('contenteditable')) 
        {
                document.getElementsByTagName("body")[0].setAtrribute('contenteditable','false');
        }
        else
        {
                document.getElementsByTagName("body")[0].setAttribute('contenteditable','true');
        }
}
