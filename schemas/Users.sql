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

