from flask import Flask, jsonify
from flask_restful import Resource, Api
import os, pprint, mappers

app = Flask(__name__)
api = Api(app)

class blindrAPI(Resource):
    def get(self):
        pass
    
    def post(self):
        pass

class todoListAPI(Resource):
    TODOS = []

    def get(self):
        reader = open( os.getcwd() + '/todos.txt' )
        try:
            for line in reader:
                self.TODOS.append(mappers.mapTodos(line))
        finally:
            reader.close()

        return jsonify({ 'todos' : self.TODOS })
    
    def post(self):
        ## TODO: Add new Todo
        pass

class todoCategoryListAPI(Resource):
    TODOS = []

    def get(self, category):
        ## TODO: Get alternative lists
        pass

    def post(self, category):
        ## TODO: Add new todo for specific category
        pass

class todoAPI(Resource):
    def get(self, todo_id):
        pass

    def put(self, todo_id):
        pass

    def delete(self, todo_id):
        pass

api.add_resource(blindrAPI, '/')
api.add_resource(todoListAPI, '/todo')
api.add_resource(todoAPI, '/todo/<int:todo_id>')

if __name__ == '__main__':
    app.run( debug=True )