# MailReceipt Data Layer

The main reason the data layer is introduced in the architecture is, we want to use Firebase as a database since it's the best free choice out there for an MVP, and in future if we want to move to some other database system, having a data layer can be very handy, we don't need to touch the application code since the functionality used by the application layer is provided by the REST APIs in the data layer. So, even if change the underlying database system, as long as we provide the same APIs from the data layer, there will be no need to change the code in the application layer.

To reduce the network call delay, the data layer will be another process spawned in the same host as application layer until the application have heavy traffic that it needs another host for data.

Also, since the object oriented programming is a good way to deal with a program with many entities with values and functionalities, using an database ORM (Object Relational Mapping) in the data layer will be very helpful when dealing with the operations on the data.

### Fun Fact

To know how may lines of JavaScript is there in your project, run `git ls-files | grep '\.js' | xargs wc -l`
