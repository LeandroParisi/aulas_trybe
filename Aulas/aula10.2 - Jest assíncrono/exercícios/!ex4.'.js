const fetch = require('node-fetch');

const trybeUrl = 'https://api.github.com/users/tryber/repos';
const repository1 = 'sd-01-week4-5-project-todo-list';
const repository2 = 'sd-01-week4-5-project-meme-generator';

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

// async function call() { 
//   const result = await getRepos('https://api.github.com/users/tryber/repos');
//   console.log(result);
// }
// call();
// Como fazer para chamar a func getRepos, sem ter que colocar ela dentro de uma async?

describe('check repositories inside trybe Git', () => {
  it('should return sd-01-week4-5-project-todo-list as first repository', async () => {
    expect.assertions(1);
    const data = await getRepos(trybeUrl);
    console.log(data);
    expect(data).toContain(repository1);
    expect(data).toContain(repository2);
    expect(data).toContain('challenge-bug-hunting-youtrybe-squad-6')
  });

  it('should return sd-01-week4-5-project-meme-generator', async () => {
    expect.assertions(1);
    const data = await getRepos(trybeUrl);
    console.log(data);
    expect(data).toContain(repository2);
  });

  it('should return challenge-bug-hunting-youtrybe-squad-6 as first repository', async () => {
    expect.assertions(1);
    const data = await getRepos(trybeUrl);
    console.log(data);
    expect(data).toContain('challenge-bug-hunting-youtrybe-squad-6')
  })
})
