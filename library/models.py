from django.db import models
from django.conf import settings
from users.models import CustomUser

# Create your models here.


class SubCategory(models.Model):
    subCategory = models.CharField(max_length=75)

    def __str__(self):
        return self.subCategory

    class Meta:
        verbose_name_plural = "Sub Categories"


CATEGORY_CHOICES = (
    ('AR', 'Architectural Guidelines & Standards'),
    ('RR', 'Rules & Regulations'),
    ('ARR', 'Both AR & RR')
)


class Issue(models.Model):
    title = models.CharField(max_length=75)
    author = models.ForeignKey(settings.AUTH_USER_MODEL,
                               on_delete=models.CASCADE,)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    category = models.CharField(max_length=3,
                                choices=CATEGORY_CHOICES)
    iscustom = models.BooleanField(default=False)
    issue_note = models.TextField(blank=True)
    is_free = models.BooleanField(default=False)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Topics"


class Rule(models.Model):
    issue = models.ForeignKey(Issue, on_delete=models.CASCADE,
                              related_name='rules')
    # on delete = set_null
    author = models.ForeignKey(settings.AUTH_USER_MODEL,
                               on_delete=models.CASCADE, )
    rule = models.TextField()
    isStateSpecific = models.BooleanField(default=False,
                                          blank=True)
    state = models.CharField(max_length=75, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    iscustom = models.BooleanField(default=False)

    def __str__(self):
        return self.rule


class Mapping(models.Model):
    subCategory = models.ForeignKey(SubCategory,
                                    on_delete=models.CASCADE)
    issue = models.ForeignKey(Issue,
                              on_delete=models.CASCADE, related_name='mapping')


class UserSelectedIssue(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE,)
    rule = models.ForeignKey(Rule, on_delete=models.CASCADE)
    updated_date = models.DateTimeField(auto_now_add=True)


class RuleMapping(models.Model):
    issue = models.ForeignKey(Issue,
                              on_delete=models.CASCADE, related_name='issue_mapping')
    rule = models.ForeignKey(Rule, on_delete=models.CASCADE)
    rule_mapped = models.ForeignKey(
        Rule, on_delete=models.CASCADE, related_name='rule_mapping')
