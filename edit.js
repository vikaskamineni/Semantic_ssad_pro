function anno_edit()
{
        if (document.getElementsByTagName("body")[0].hasAtrribute('conteneditable') 
        {
                document.getElementsByTagName("body")[0].setAtrribute('conteneditable','false');
        }
        else
        {
                document.getElementsByTagName("body")[0].setAttribute('contenteditable','true');
        }
}
