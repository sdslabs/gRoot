-module(main) 
-export([start/0]) 

start() ->
   Str1 = "I am gRoot", 
   io:fwrite("~p~n",[Str1])
