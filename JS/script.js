///=========AddCmment =========///

let comments = [];
		function addComment() {
			const nameInput = document.getElementById("nameInput");
			const commentInput = document.getElementById("commentInput");


			const name = nameInput.value;
			const comment = commentInput.value;


			if (name !== "" && comment !== "") {
				const commentObj = {
					id: comments.length + 1,
					name: name,
					comment: comment,
					likeCount: 0,
					dislikeCount: 0
				};

				comments.push(commentObj);
				displayComments();
				nameInput.value = "";
				commentInput.value = "";
				alert("تمت إضافة التعليق بنجاح!");
			}
		}
		function displayComments() {
			const commentsContainer = document.getElementById("commentsContainer");
			commentsContainer.innerHTML = "";

			comments.forEach((comment) => {
				const commentElement = document.createElement("div");
				commentElement.innerHTML = 
        `<strong>${comment.name}:</strong> ${comment.comment}
        <div class="feedback">
        <button class="like-btn" onclick="likeComment(${comment.id})"><i class="fa fa-thumbs-up"></i><img src="./images/logo_social/like .svg"   alt=""></button>
        <span id="likeCount-${comment.id}">${comment.likeCount}</span>
        </div>
        <div class="feed">
        <button class="dislike-btn" onclick="dislikeComment(${comment.id})"> <i class="fa fa-thumbs-down"></i><img src="./images/logo_social/dislike3.svg"   alt=""></button>
        <span id="dislikeCount-${comment.id}">${comment.dislikeCount}</span>
      </div>`;
    commentsContainer.appendChild(commentElement);
			});
		}

		function likeComment(commentId) {
			const comment = comments.find((comment) => comment.id === commentId);
			if (comment) { 
				comment.likeCount++;

				const likeCountElement = document.getElementById('likeCount-${comment.id}');
				likeCountElement.innerText = comment.likeCount;
			}
		}

		function dislikeComment(commentId) {
			const comment = comments.find((comment) => comment.id === commentId);

			if (comment) {
				comment.dislikeCount++;
				const dislikeCountElement = document.getElementById(`dislikeCount-${comment.id}`);
				dislikeCountElement.innerText = comment.dislikeCount;
			}
		}

    ////========this code for slider=============///


    //slider
    const slides = document.querySelectorAll('.slides');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    i = 0;

    function ActiveSlide(n){
      for(slide of slides)
      slide.classList.remove('active');
      slides[n].classList.add('active');
    }
    
    // function for next btn
    next.addEventListener('click', function(){
      if(i == slides.length - 1){
        i = 0;
        ActiveSlide(i);
      }
      else 
      {
        i++;
        ActiveSlide(i);
      }
    })

     // function for prev btn
     prev.addEventListener('click', function(){
      if(i == 0){
        i = slides.length - 1;
        ActiveSlide(i);
      }
      else 
      {
        i--;
        ActiveSlide(i);
      }
    })


            /// Date in the tabel////

   document.getElementById("myForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission

      var name = document.getElementById("name").value;
      var date = document.getElementById("date").value;
      var email = document.getElementById("email").value;
      var mobile = document.getElementById("mobile").value;
      var message = document.getElementById("message").value;
      var country = document.getElementById("country").value;
      var topic =document.getElementById("topic").value;
        

      var table = document.getElementById("dataTable");
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
    


      cell1.innerHTML = name;
      cell2.innerHTML = date;
      cell3.innerHTML = email;
      cell4.innerHTML = mobile;
      cell5.innerHTML = message;
      cell6.innerHTML = country;
      cell7.innerHTML = topic;
 

      document.getElementById("name").value = "";
      document.getElementById("date").value = "";
      document.getElementById("email").value = "";
      document.getElementById("mobile").value = "";
      document.getElementById("message").value = "";
      document.getElementById("country").value = "";
      document.getElementById("topic").value= "";
        
    });

    //ABOUT US

  
