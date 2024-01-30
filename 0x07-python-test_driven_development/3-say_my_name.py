#!/usr/bin/bash/python3
"""Function that prints names"""
def say_my_name(first_name, last_name=""):
    """
    Prints the name first and second name

    Args:
    first_name(str):first name
    last_name(str):the last name

    Raises:
    TypeError-if first or last name is not a string
    """
    if not isinstance(first_name, str):
        raise TypeError ("first_name must be a string")
    if not isinstance(last_name, str):
        raise TypeError ("last_name must be a string")
    print("My name is{} {}".format(first_name,last_name))

