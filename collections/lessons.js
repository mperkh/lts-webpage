Lessons = new Mongo.Collection('lessons');

Lessons.allow({
  insert: function(){return true}
})

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
    autoValue: function() {
      return new Date();
    },
    autoform: {
      type: 'hidden'
    }
  }
});

Lessons.attachSchema(LessonsShema);
