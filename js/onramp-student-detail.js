

    $("input[type=\"checkbox\"]").not("[data-switch-no-init]").bootstrapSwitch();



    $(function(){
        var sampleTags = ['Music', 'Dancing', 'Coding', 'Science', 'Drawing', 'Photography', 'Childcare'];


        //-------------------------------
        // Single field
        //-------------------------------
        $('#singleFieldTags').tagit({
            availableTags: sampleTags,
            // This will make Tag-it submit a single form value, as a comma-delimited field.
            singleField: true,
            singleFieldNode: $('#mySingleField')
        });

        

        

        //-------------------------------
        // Preloading data in markup
        //-------------------------------
        //-------------------------------
        // Allow spaces without quotes.
        //-------------------------------
        $('#personalInterestList').tagit({
            //availableTags: sampleTags,
            itemName: 'item',
            fieldName: 'tags',
            removeConfirmation: true,
            allowSpaces: true,
            //autocomplete: { delay: 0, minLength: 2, source: sampleTags }

        });

        $('#schoolInterestList').tagit({
            //availableTags: sampleTags,
            itemName: 'item',
            fieldName: 'tags',
            removeConfirmation: true,
            allowSpaces: true,
            //autocomplete: { delay: 0, minLength: 2, source: sampleTags }

        });

            
    });