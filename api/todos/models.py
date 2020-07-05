from django.db import models

# LEXERS = [item for item in get_all_lexers() if item[1]]
# LANGUAGE_CHOICES = sorted([(item[1][0], item[0]) for item in LEXERS])
# STYLE_CHOICES = sorted((item, item) for item in get_all_styles())


class Todo(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField()
    todo = models.CharField(max_length=100, blank=True, default='')
    # tags = we need a many to one here
    # mentions = we need a many to one here
    coveredInBear = models.BooleanField()
    trackedInOmni = models.BooleanField() 
    owner = models.ForeignKey('auth.User', related_name='todos', on_delete=models.CASCADE)

    class Meta:
        ordering = ('created', )

    def save(self, *args, **kwargs):
        """
        Save todo.
        """
        super(Todo, self).save(*args, **kwargs)

    # def toString(self):