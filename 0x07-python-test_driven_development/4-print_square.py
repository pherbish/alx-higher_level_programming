#!/usr/bin/python3
"""printing square"""
def print_square(size):
    """
    Prints square of len size

    Args:
    size(int):its an integer greater than 0
    Raises:
    TypeError if iots not an integer
    ValueError if its less than or equals to 0
    """
    if not isinstance(size, int):
        raise TypeError("size must be an integer")

    
    if size <= 0:
        raise ValueError("size must be greater than 0")

    for i in range(size):
        for j in range (size):
            print("#")

