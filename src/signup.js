function filterDistricts(a, b) {
    var region = document.getElementById("region");
    var district = document.getElementById("district");
    
    if (region != null)
    {
        clearCombo(district);
        var str = region.options[region.selectedIndex].value;
        if (str == "northern")
        {
            list = ['Chitipa',
                    'Karonga',
                    'Likoma',
                    'Mzimba',
                    'Nkhata Bay',
                    'Rumphi'];
        }
        else if (str == "central")
        {
            list = ['Dedza',
                    'Dowa',
                    'Kasungu',
                    'Lilongwe',
                    'Mchinji',
                    'Nkhotakota',
                    'Ntcheu',
                    'Ntchisi',
                    'Salima'];
        }
        else if (str == "southern")
        {
            list = ['Balaka',
                    'Blantyre',
                    'Chikwawa',
                    'Chiradzulu',
                    'Machinga',
                    'Mangochi',
                    'Mulanje',
                    'Mwanza',
                    'Nsanje',
                    'Thyolo',
                    'Phalombe',
                    'Zomba',
                    'Neno'];
        }
        else 
        {
            list = []
        }
    }
    for (var item in list)
    {
        var option = document.createElement('option');
        option.text = option.value = item;
        try {
            district.add(option, null); //Standard
        }catch(error) {
            district.add(option); // IE only
        }
    }
}

function clearCombo(combo)
{
    if (combo != null)
    {
        while (combo.options.length > 0) 
        {                
            combo.remove(0);
        }
    }
}