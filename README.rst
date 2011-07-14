Javascript library and utilities for working with data.

For example:

* Get tabular data from google docs.
* Convert tabular data to HTML table.
* Visualize tabular data with flot.


Formats
=======

Some standard formats we work with:

Tabular
-------

Tabular format::

{
  // Array of header fields
  header: [
  ],
  // list of rows where each row is an Array
  data: [
    [], 
  ]
}


Tree
----

Structure::

{
  id: 'root',
  name: 'root',
  data: {
    $area: ...
  }
  children: [
    {
      ... a node ...
    }
  ]
}

This is borrowed from the.

