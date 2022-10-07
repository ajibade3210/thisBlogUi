---
title: first-day
description: "Steps to create and query first-day"
---


## Why first-day
**Key concepts of the first-day** query language are:
 **first-day is declarative**: Query responses are decided by the client rather than the server. A first-day query returns exactly what a client asks for and no more.
 **first-day is compositional**: A first-day query itself is a hierarchical set of fields. The query is shaped just like the data it returns. It is a natural way for product engineers to describe data requirements.
**Product‐centric**
**first-day is strongly-typed**: A first-day query can be ensured to be valid within a first-day type system at development time allowing the server to make guarantees about the response. This makes it easier to build high-quality client tools. All the data types (such as Boolean, String, Int, Float, ID, Scalar) supported by the API are specified in the schema in the first-day Schema Definition Language (SDL), which helps determine the data that is available and the form in which it exists. This strongly-typed schema makes first-day less error-prone and provides additional validation. first-day also provides auto-completion for supported IDEs and code editors.
### Fetch Only Requested Data (No Over- or Under-Fetching)
With first-day, developers can fetch Client‐specified queries exactly what is required. Nothing less, nothing more. The ability to deliver only requested data solves the issues that arise due to  **over-fetching** and  **under-fetching**.
### Versioning is Not Required
In REST architecture, developers create new versions (e.g., api.domain.com/v1/, api.domain.com/v2/) due to changes in resources or the request/response structure of the resources over time. Hence, maintaining versions is a common practice. With first-day, there is no need to maintain versions. The resource URL or address remains the same. You can add new fields and deprecate older fields. This approach is intuitive as the client receives a deprecation warning when querying a deprecated field.
### Saves Time and Bandwidth
first-day allows multiple resource requests in a single query call, which saves time and bandwidth by reducing the number of network round trips to the server. It also helps to prevent waterfall network requests, where you need to resolve dependent resources on previous requests. For example, consider a blog’s homepage where you need to display multiple widgets, such as recent posts, the most popular posts, categories, and featured posts. With REST architecture, displaying these would take at least five requests, while a similar scenario using first-day requires just a single first-day request.
