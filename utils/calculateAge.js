export default function calculateAge(birthDate) {
    birthDate = new Date(birthDate);
    const otherDate = new Date();

    var years = (otherDate.getFullYear() - birthDate.getFullYear());

    if (otherDate.getMonth() < birthDate.getMonth() ||
        otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
        years--;
    }

    return years;
}