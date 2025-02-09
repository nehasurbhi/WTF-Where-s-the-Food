fetch('navbar.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById("navbar").innerHTML = html;
      })
      .catch(error => {
        console.error('Error fetching navbar.html:', error);
      });

    //   footer js

    fetch('footer.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById("footer").innerHTML = html;
      })
      .catch(error => {
        console.error('Error fetching footer.html:', error);
      });

      fetch('card.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById("card").innerHTML = html;
      })
      .catch(error => {
        console.error('Error fetching card.html:', error);
      });
   