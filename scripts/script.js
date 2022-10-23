function takeValues()
{
    let food1 = document.getElementById('food1').value;
    let name2 = document.getElementById('name2').value;
    let ad3 = document.getElementById('ad3').value;
    let noun4 = document.getElementById('noun4').value;
    let food5 = document.getElementById('food5').value;
    let name6 = document.getElementById('name6').value;
    let noun7 = document.getElementById('noun7').value;
    let verb8 = document.getElementById('verb8').value;
    let verb9 = document.getElementById('verb9').value;
    let verb10 = document.getElementById('verb10').value;
    let noun11 = document.getElementById('noun11').value;
    let noun12 = document.getElementById('noun12').value;
    let name13 = document.getElementById('name13').value;
    let food14 = document.getElementById('food14').value;

    let story = "It was " + food1 + " day at school, and " + name2 + " was super " + ad3 + " for lunch. " +
    "But when she went outside to eat, a " + noun4 + " stole her " + food5 + "! " + name6 + " chased the " + 
    noun7 + " all over school. She " + verb8 + ", " + verb9 + ", " + "and " + verb10 + " through the playground. " +
    "Then she tripped on her " + noun11 + " and the " + noun12 + " escaped! Luckily, " + name13 + "’s " +
    "friends were willing to share their " + food14 + " with her."

    document.getElementById('story').outerHTML = story;
}