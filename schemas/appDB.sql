create table calorie_user (
  id int not null auto_increment,
  username varchar(12) not null,
  gender varchar(6) not null,
  age int not null,
  curr_height decimal(10,2) not null,
  curr_weight decimal (10,2) not null,
  Desire_weight decimal(10,2) null,
  curr_date date not null,
  calories_goal decimal(5,2) null,
  weekly_loss_goal decimal(10,2) null,
  target_calories decimal(10,2) null,
  primary key (id)
  );

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