let student = {
    subjects: [],

    addSubject(newSubject) {
        if (!this.subjects.includes(newSubject)) {
            this.subjects.push(newSubject);
            console.log(`Предмет ${newSubject} додано.`);
        }
        else {
            console.log(`Предмет ${newSubject} вже існує.`);
        }
    },

    removeSubject(subject) {
        const index = this.subjects.indexOf(subject);
        if (index !== -1) {
            this.subjects.splice(index, 1);
            console.log(`Предмет ${subject} видалено.`);
        } else {
            console.log(`Ви не вивчаєте предмет ${subject} .`);
        }
    },

};

student.addSubject('Математика');
student.addSubject('Історія');
student.addSubject('Математика');
console.log(student.subjects);

student.removeSubject('Історія');
console.log(student.subjects);
student.removeSubject('Англійська');
