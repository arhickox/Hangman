window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var word ;
    var guess ;
    var lives ;
    var space;
    var counter ;
    var geusses = [ ];
    var showLives = document.getElementById("playerLives");
  

    var buttons = function () {
      myButtons = document.getElementById('buttons');
      letters = document.createElement('ul');
  

      for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
      }
    }
  
     result = function () {
      wordHolder = document.getElementById('theWord');
      correct = document.createElement('ul');
  
      for (var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
          guess.innerHTML = " ";
          space = 1;
        } else {
          guess.innerHTML = "_";
        }
  
        geusses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
      }
    }

    //can't get the previous guesses to work so I'll pseudocode it

    //make array to hold letters and make coresponding div in html body
    //have a line, i believe in the function below, that appends the incorrect word to the array
    //use DOM manipulation to post array list on page
    
     comments = function () {
      showLives.innerHTML = "You have " + lives + " lives";
      if (lives < 1) {
        showLives.innerHTML = "Game Over";
      }
      for (var i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length) {
          showLives.innerHTML = "You Win!";
        }
      }
    }
  
     check = function () {
      list.onclick = function () {
        var geuss = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
          if (word[i] === geuss) {
            geusses[i].innerHTML = geuss;
            counter += 1;
          } 
        }
        var j = (word.indexOf(geuss));
        if (j === -1) {
          lives -= 1;
          // i believe here alongside the lives counter being reduced
          comments();
        } else {
          comments();
        }
      }
    }
    
    play = function () {
        var wordsList = [
            "palpatine",
            "kenobi",
            "skywalker",
            "darth vader",
            "grand moff tarkin",
            "general grievous",
            "kylo ren",
            "mace windu",
            "yoda",
            "chewbacca",
            "padme amidala",
            "ahsoka tano",
            "bossk",
            "boba fett",
            "dengar",
            "stormtrooper",
            "clone trooper",
            "poe dameron",
            "finn",
            "rey",
            "rose tico",
            "han solo",
            "leia organa",
            "darth maul",
            "count dooku",
            "jyn erso",
            "cassian andor",
            "millennium falcon",
            "death star",
            "lightsaber",
            "lando calrissian",
            "krennic",
            "jabba the hutt",
            "lobot",
            "admiral ackbar",
            "greedo",
            "captain phasma",
            "enfys nest",
        ];
        
  
      word = wordsList[Math.floor(Math.random() * wordsList.length)];
      word = word.replace(/\s/g, "-");
      console.log(word);
      buttons();
  
      geusses = [ ];
      lives = 10;
      counter = 0;
      space = 0;
      result();
      comments();
      selectCat();
    }
  
    play();

  }
  
  