Lessons = new Meteor.Collection('lessons');

LessonsShema = new SimpleSchema({
  title: {
    type: String,
    label: 'Titel'
  },
  descr: {
    type: String,
    label: 'Beschreibung'
  },
  createdAt: {
    type: Date,
    label: 'Creation Date',
    autoValue: function(){
      return new Date();
    }
  }
});

Lessons.attachSchema(LessonsShema);
