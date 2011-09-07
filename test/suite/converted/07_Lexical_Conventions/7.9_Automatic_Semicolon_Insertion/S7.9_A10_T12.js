// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check {} for automatic semicolon insertion
 *
 * @id: S7.9_A10_T12;
 * @section: 7.9;
 * @description: Checking if execution of "{ \n a: \n 1 \n } \n 3" passes;
 */

//CHECK#1
{
a:
1 
} 
3
