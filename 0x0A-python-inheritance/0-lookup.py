#!/usr/bin/python3
"""Function listing availabele objects"""
def lookup(obj):
    """
    Returns available objects
    Args:
    objects as the argument
    Return:list of methods and attributes of an object
    """
    return dir(obj)
