# Date utility library

This is the second project from the [Advanced JavaScript: Structure &amp; Scale](https://vanillajsacademy.com/advanced/) workshop by [Chris Ferdinandi](https://gomakethings.com/). It's a simple utility library that makes it easier to work with dates.

[View demo](https://kieranbarker.github.io/date_utility_library/)

## `Time.getDay()`

Get the day of the week as a string.

### Parameters

<dl>
  <dt><code>date</code> (optional)<dt>
  <dd>A <code>Date</code> object. Defaults to <code>new Date()</code>.</dd>
</dl>

### Return value

A string representing the day of the week, e.g. `'Monday'`.

## `Time.getMonth()`

Get the month of the year as a string.

### Parameters

<dl>
  <dt><code>date</code> (optional)<dt>
  <dd>A <code>Date</code> object. Defaults to <code>new Date()</code>.</dd>
</dl>

### Return value

A string representing the month of the year, e.g. `'January'`.

## `Time.addSeconds()`

Add a number of seconds to a date.

### Parameters

<dl>
  <dt><code>date</code> (optional)<dt>
  <dd>A <code>Date</code> object. Defaults to <code>new Date()</code>.</dd>

  <dt><code>numSeconds</code> (optional)<dt>
  <dd>The number of seconds to add. Defaults to <code>0</code>. </dd>
</dl>

### Return value

A new `Date` object with the seconds added.

## `Time.addMinutes()`

Add a number of minutes to a date.

### Parameters

<dl>
  <dt><code>date</code> (optional)<dt>
  <dd>A <code>Date</code> object. Defaults to <code>new Date()</code>.</dd>

  <dt><code>numMinutes</code> (optional)<dt>
  <dd>The number of minutes to add. Defaults to <code>0</code>. </dd>
</dl>

### Return value

A new `Date` object with the minutes added.

## `Time.addHours()`

Add a number of hours to a date.

### Parameters

<dl>
  <dt><code>date</code> (optional)<dt>
  <dd>A <code>Date</code> object. Defaults to <code>new Date()</code>.</dd>

  <dt><code>numHours</code> (optional)<dt>
  <dd>The number of hours to add. Defaults to <code>0</code>. </dd>
</dl>

### Return value

A new `Date` object with the hours added.

## `Time.addDays()`

Add a number of days to a date.

### Parameters

<dl>
  <dt><code>date</code> (optional)<dt>
  <dd>A <code>Date</code> object. Defaults to <code>new Date()</code>.</dd>

  <dt><code>numDays</code> (optional)<dt>
  <dd>The number of days to add. Defaults to <code>0</code>. </dd>
</dl>

### Return value

A new `Date` object with the days added.

## `Time.addMonths()`

Add a number of months to a date.

### Parameters

<dl>
  <dt><code>date</code> (optional)<dt>
  <dd>A <code>Date</code> object. Defaults to <code>new Date()</code>.</dd>

  <dt><code>numMonths</code> (optional)<dt>
  <dd>The number of months to add. Defaults to <code>0</code>. </dd>
</dl>

### Return value

A new `Date` object with the months added.

## `Time.addYears()`

Add a number of years to a date.

### Parameters

<dl>
  <dt><code>date</code> (optional)<dt>
  <dd>A <code>Date</code> object. Defaults to <code>new Date()</code>.</dd>

  <dt><code>numYears</code> (optional)<dt>
  <dd>The number of years to add. Defaults to <code>0</code>. </dd>
</dl>

### Return value

A new `Date` object with the years added.
