// $('.edit').on('click', function (event) {
//     event.preventDefault();
//     var element = this
//     juanOnOnePage.showActiveSection(element);
//   })
//   $('body').on('click','.edit', function(e) {
//     e.preventDefault();
//     var $editText = $(this).siblings('.edit-Text')
//     $editText.css('display','inline-block');
//
//   })
//on double-clicking an item, allow them to edit it
var Edit = {
    init: function() {},
    styling: function() {},
    events: function() {
        $(".messages").on("dblclick", ".message", function() {
<<<<<<< HEAD
            $(this).children(".messageText")[0].contentEditable = true;
        });
        $(".messages").on("keypress", ".message", function(event) {
            if (event.charCode === 13) {
                $(this).children(".messageText")[0].contentEditable =
                    false;
                    Edit.editMessage()
            }
        });
    },
    editMessage: function(message, $editedMsg) {
        $.ajax({
            type: 'PUT',
            url: messageUrl,
            data: message,
            success: function(editedMessages) {
                console.log('you changed me yayyy', editedMessages)
                console.log($editedMsg)
            },
            failure: function(editedMessages) {
                console.log('not working here you',
                    editedMessages)
            }
        })
    }

=======
            $(this).children(".chat")[0].contentEditable = true;
        });
        $(".messages").on("keypress", ".message", function(event) {
            if (event.charCode === 13) {
                $(this).children(".chat")[0].contentEditable =
                    false;
            }
        });
    },
    editMessage: function(messages, $editedMsg) {
        $.ajax({
            type: 'PUT',
            url: messageUrl,
            data: messageL,
            success: function(editedMessages) {
                console.log('you changed me yayyy',
                    editedMessages);
                console.log($editedMsg);
            },
            failure: function(editedMessages) {
                console.log('not working here you',
                    editedMessages);
            },
        });
    }
>>>>>>> 03ebc5e4cc9124e99948c2309420f56167fb281c
};
