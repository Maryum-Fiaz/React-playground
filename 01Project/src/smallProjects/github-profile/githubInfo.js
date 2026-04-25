export const githubInfo = async () => {
    const res = await fetch(`https://api.github.com/users/Maryum-Fiaz`);
    return res.json();
}