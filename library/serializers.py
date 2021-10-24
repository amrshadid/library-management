from rest_framework import serializers
from .models import *

class IssueSerializer(serializers.ModelSerializer):
    category = serializers.SerializerMethodField()
    
    class Meta:
        model = Issue
        fields = (
            'id',
            'title',
            'category',
            'issue_note'
            
        )
        
    def get_category(self, obj):
        return obj.get_category_display()

class RuleSerializer(serializers.ModelSerializer):
    #issue = serializers.SerializerMethodField()

    class Meta:
        model = Rule
        fields = (
            'id',
            'rule',
            'isStateSpecific',
            'state',
            
        )

    #def get_issue(self, obj):
        #return IssueSerializer(obj.issue).data['title']


class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields =('id','subCategory',)

class MappingSerializer(serializers.ModelSerializer):
    subCategory = serializers.SerializerMethodField()
    #issue = serializers.SerializerMethodField()

    class Meta:
        model = Mapping
        fields = ('subCategory',)

    def get_subCategory(self, obj):
        return SubCategorySerializer(obj.subCategory).data



class IssueDetailSerializer(serializers.ModelSerializer):
    #mapping = MappingSerializer(many = True)
    category = serializers.SerializerMethodField()
    rules = serializers.SerializerMethodField()
    mapping = serializers.SerializerMethodField()
    #subCategory_name = serializers.RelatedField(source='Mapping', read_only=True)
    

    class Meta:
        model = Issue
        fields = (
            'id',
            'title',
            'rules',
            'category',
            'mapping',
            'issue_note'
            
        )

    def get_category(self, obj):
        return obj.get_category_display()

    def get_rules(self, obj):
        return RuleSerializer(obj.rules.all(), many=True).data
    
    def get_mapping(self, obj):
        return MappingSerializer(obj.mapping.all(), many=True).data
    


class UserSelectedIssueSerializer(serializers.ModelSerializer):
    rule = serializers.SerializerMethodField()
    #issue = serializers.SerializerMethodField()

    class Meta:
        model = UserSelectedIssue
        fields = (
            
            'rule',
        )

    def get_rule(self, obj):
        return RuleSerializer(obj.rule).data
