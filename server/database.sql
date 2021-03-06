CREATE DATABASE browsergame;

CREATE TABLE user_data(
    user_id int,
    user_name varchar(255),
    user_email varchar(255)
);

CREATE TABLE game_data(
    user_id int,
    food_qty int,
    food_prod float,
    wood_qty int,
    wood_prod float,
    stone_qty int,
    stone_prod float,
    iron_qty int,
    iron_prod float,
    farm_lvl int,
    forum_lvl int,
    lumberjack_lvl int,
    quarry_lvl int,
    mine_lvl int,
    workshop_lvl int,
    barracks_lvl int,
    academy_lvl int,
    wall_lvl int,
    fort_lvl int,
    last_updated bigint
);

INSERT INTO game_data VALUES(
    1234,
    1000,
    10,
    1200,
    5,
    1300,
    5,
    200,
    1,
    1,
    2,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    1657801211205
);

 