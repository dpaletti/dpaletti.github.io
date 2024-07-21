$('a').filter(function (index) {
                  return $(this).css("display") === "block";
              }).each(function(index){
                const colors = ['yellow', 'red', 'blue'];
                const colorIndex = index % colors.length;
                $(this).css("text-decoration-color", colors[colorIndex])
              });
