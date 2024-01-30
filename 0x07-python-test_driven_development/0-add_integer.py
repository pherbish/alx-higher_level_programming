#!/usr/bin/env python3

"""
A module that handles addition of two integers.
"""

def add_integer(a, b=98):
    """
    Returns the sum of two integers.

    Args:
        a (int): The first integer.
        b (int, optional): The second integer. Defaults to 98.

    Raises:
        TypeError: If either 'a' or 'b' is not an integer or float.

    Returns:
        int: The sum of 'a' and 'b'.
    """
    if not isinstance(a, (int, float)):
        raise TypeError("a must be an integer or float")
    if not isinstance(b, (int, float)):
        raise TypeError("b must be an integer or float")

    return int(a) + int(b)
