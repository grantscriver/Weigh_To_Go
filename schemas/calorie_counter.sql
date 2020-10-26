  create table  calorie_counter (
  id int not null auto_increment,
  user_id varchar(12) not null,
  meal_date date not null,
  consumed_food varchar(100) not null, 
  food_uom varchar (20) NULL,
  consumed_per_uom decimal (5,2) null,
  calories_per_uom decimal (5,2) null,
  total_calories_consumed decimal (5,2) null,
  calories_goal decimal (5,2) not null,
  remainder_goal decimal (5,2) null,
  goal_deficit decimal (5,2) null,
  primary key (id)
  );