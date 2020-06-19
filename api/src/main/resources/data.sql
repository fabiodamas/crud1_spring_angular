CREATE TABLE IF NOT EXISTS billionaires (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  first_name VARCHAR(250) NOT NULL,
  last_name VARCHAR(250) NOT NULL,
  career VARCHAR(250) DEFAULT NULL
);
 
INSERT INTO billionaires (first_name, last_name, career)
SELECT 'fabio','damas','analista de sistemas'
WHERE NOT EXISTS (SELECT * FROM billionaires where first_name='fabio') ;

INSERT INTO billionaires (first_name, last_name, career)
SELECT 'ludmila','garcia', 'biologa'
WHERE NOT EXISTS (SELECT * FROM billionaires where first_name='ludmila') ;

 