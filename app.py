# Import SQL Alchemy `automap`, Flask, custom function and other dependencies. 
from sqlalchemy import create_engine, MetaData, desc
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from flask import Flask, jsonify, render_template
from sqlalchemy import func

# Import and establish Base for which classes will be constructed 
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

# Import modules to declare columns and column data types
from sqlalchemy import Column, Integer, String, Float, inspect

import numpy as np

app = Flask(__name__)

# Create a connection to a SQLite database
engine = create_engine('sqlite:///pollution.sqlite', echo=False)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

Pollution = Base.classes.pollution

#create session (link) from Python to the DB
session = Session(engine)

@app.route("/")
def home():
    
    return render_template("index.html")

@app.route("/state")
def state():
    results = engine.execute("SELECT DISTINCT StateAbbr FROM Pollution ORDER BY StateAbbr").fetchall()
    #resultstate = session.query(Pollution.State, Pollution.StateAbbr).all()
    print(results)
    state_list = [list(i) for i in results]
    return jsonify(state_list)

@app.route("/year")
def year():
    results = engine.execute("SELECT DISTINCT Year FROM Pollution ORDER BY Year").fetchall()
    #resultstate = session.query(Pollution.State, Pollution.StateAbbr).all()
    print(results)
    year_list = [list(i) for i in results]
    return jsonify(year_list)

@app.route("/avgno2/<state>")
def avgno2(state):

    print(state)
    year = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010]
#    avgno2=[17.96038067,17.60865269,15.12116646,14.4434334,16.14101422,15.32265124,12.74305556,13.30331293,12.86033213,12.19543145,13.65788545]
    print(year)

#   results = engine.execute("SELECT Year, Avg(NO2) AS AvgOfNO2 FROM Pollution WHERE (((StateAbbr) = state)) GROUP BY Year").fetchall() 
    results = session.query(Pollution.Year, func.avg(Pollution.NO2)).filter(Pollution.StateAbbr == state).group_by(Pollution.Year).all()

    avgno2 = []
    row = {}

    for result in results:
        avgno2.append(result[1])

    row = {
        "year": year,
        "avgno2":avgno2
    }
    print(row)
    print('made it here again')
    return jsonify(row)


@app.route("/avgco/<state>")
def avgco(state):

    print(state)
    year = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010]
    print(year)
 
    results = session.query(Pollution.Year, func.avg(Pollution.CO)).filter(Pollution.StateAbbr == state).group_by(Pollution.Year).all()

    avgco = []
    row = {}

    for result in results:
        avgco.append(result[1])

    row = {
        "year": year,
        "avgco":avgco
    }
    print(row)
    print('made it here again')
    return jsonify(row)


@app.route("/avgo3/<state>")
def avgo3(state):

    print(state)
    year = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010]
    print(year)
    results = session.query(Pollution.Year, func.avg(Pollution.O3)).filter(Pollution.StateAbbr == state).group_by(Pollution.Year).all()

    avgo3 = []
    row = {}

    for result in results:
        avgo3.append(result[1])

    row = {
        "year": year,
        "avgo3":avgo3
    }
    print(row)
    print('made it here again')
    return jsonify(row)    

@app.route("/avgs2/<state>")
def avgs2(state):

    print(state)
    year = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010]
    print(year)
    results = session.query(Pollution.Year, func.avg(Pollution.S2)).filter(Pollution.StateAbbr == state).group_by(Pollution.Year).all()

    avgs2 = []
    row = {}

    for result in results:
        avgs2.append(result[1])

    row = {
        "year": year,
        "avgs2":avgs2
    }
    print(row)
    print('made it here again')
    return jsonify(row)    


if __name__ == '__main__':
    app.run()
