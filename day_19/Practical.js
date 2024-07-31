// Practical Application⬇︎
const passwords = [
    "Password123!",
    "password123",
    "PASSWORD123",
    "Passw0rd",
    "P@ssword123"
  ];
  
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
  passwords.forEach(password => {
    if (regex.test(password)) {
      console.log(`Valid password: ${password}`);
    } else {
      console.log(`Invalid password: ${password}`);
    }
  });
  


  const urls = [
    "http://www.example.com",
    "https://example.com",
    "ftp://example.com",
    "http://example.com/path?name=value#anchor",
    "https://sub.domain.example.com",
    "invalid_url",
    "www.example.com",
    "http://example"
  ];
  
  const regex2 = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  
  urls.forEach(url => {
    if (regex2.test(url)) {
      console.log(`Valid URL: ${url}`);
    } else {
      console.log(`Invalid URL: ${url}`);
    }
  });
  