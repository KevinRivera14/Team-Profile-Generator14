const generateHTML = data => {
	const cards = data.map(emp => {
		const icon =
			emp.getRole() === 'Manager'
				? `<i class='bi bi-cup-hot'></i>`
				: emp.getRole() === 'Engineer'
				? `<i class='bi bi-sunglasses'></i>`
				: `<i class='bi bi-mortarboard-fill'></i>`;
		const role =
			emp.getRole() === 'Manager'
				? `Office #: ${emp.getOfficeNumber()}`
				: emp.getRole() === 'Engineer'
				? `GitHub: ${emp.getGitHub()}`
				: `School: ${emp.getSchool()}`;
		return `
                <div class="col-4">
        <div class="card shadow">
        <div class="card-header bg-primary text-light">
           <h2> ${emp.getName()}</h2>
           <h3>${icon} ${emp.getRole()}</h3>
        </div>
        <div class="card-body bg-light">
        <ul class="list-group">
  <li class="list-group-item">Id: ${emp.getId()}</li>
  <li class="list-group-item">Email: <a class="link-secondary" href="mailto:${emp.getEmail()}"> ${emp.getEmail()}</a></li>
  <li class="list-group-item">${role}</li>
</ul></div></div></div>`;
	});
	return cards.join('');
};

module.exports = team => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
</head>
<body>
    <header class="bg-danger py-5 mx-0 text-center text-light">
        <h1>
            My Team
        </h1>
    </header>
    <main class="my-3 container">
    <div class="row g-4 flex justify-content-center">
        ${generateHTML(team)}
        </div>
    </main>
    <footer class="bg-danger py-3 mx-0 text-center text-light">
        &copy; 2023
    </footer>
</body>
</html>
`;
