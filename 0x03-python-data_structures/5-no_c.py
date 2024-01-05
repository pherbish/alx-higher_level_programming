#!/usr/bin/python3
def no_c(my_string):
    if my_string[:]:
        new = my_string.translate({ord("c"): None})
        second_new = new.translate({ord("C"): None})
        return second_new
    return my_string
