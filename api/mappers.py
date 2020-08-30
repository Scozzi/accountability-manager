import datetime, re

def mapTodos(rawTodo):
    splitTodo = rawTodo.split('|')
    
    todoForReturn = {}
    if splitTodo[0].strip() != "":
        dateDeconstructed = splitTodo[0].strip().split('/')
        
        month = dateDeconstructed[0]
        day = dateDeconstructed[1]
        year = dateDeconstructed[2]


        todoForReturn['created'] = datetime.datetime(year, month, day)
    if splitTodo[1].strip() != "":
        # regex to extract mentions and hashtags
        mentionsPattern = '@(\w*-?\w*)+'
        hashtagsPattern = '#(\w*-?\w*)+'
        # todoForReturn['description'] = 
    return {
        'created' : splitTodo[0].strip,
        'description' : splitTodo[1].strip(),
        'mentions': 'test',
        'hashtags': 'test'
        }
