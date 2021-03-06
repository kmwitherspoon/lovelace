var Display = {
  init: function () {
    Display.events();
    Display.styling();
  },
  events: function () {

  },
  styling:function(){
    setInterval(Display.getMessages,2000);
    // Display.getMessages();
    $(".messages").removeClass("hidden");
    $(".chatter-box").removeClass("hidden");
    $(".loginSection").addClass("hidden");
  },
  loadMessages: function (messageData) {
    $(".messages").html("");
    _.each(messageData,function (message) {
      $(".messages").prepend(chatPage.messageTemplate(message));
    });

  },
  getMessages: function () {
    $.ajax({
      type: 'GET',
      url: chatPage.messageURL,
      success:function (data) {
        console.log("Messages retrieved: ", data);
        Display.loadMessages(data);
      },
      failure:function (data) {
        console.log("Failed to retrieve messages: ", data);
      }
    });
  }
}
