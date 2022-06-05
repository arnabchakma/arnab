const contact = document.quarySelector('.contact'),
      form = contact.quarySelectorAll('form'),
      submitInput = form[0].quarySelector('button[type="submit"]');
      function getDataForm(e) {
          e.preventDefault();
          var FormData = new FormData(form[0]);
          alert(FormData.get('nameField') + ' - ' + FormData.get('emailField') + ' - ' + FormData.get('passswordFeild'))
      }
      document.addEventListener('DOMContentloaded', function() {
          submitInput.addEventListener('click', getDataForm, false);
      }, false); 