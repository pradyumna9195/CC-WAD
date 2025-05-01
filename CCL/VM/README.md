Network Address Translation (NAT):
• Network Address Translation is a tecnique used in IP networking that modify IP packet header, by
changing IP address, while the routing device processes the packet.
• Only the IP address of the routing device (in case of a Virtual Machine, the host ack at router for the
guest) is seen from outside. Usually the routed device (in our case, the guest machine) has an IP
address that belongs to a completely different IP subnet.
• NAT make easy to use a virtual machine because:
o it does not require to configure guest network parameters (the router act as DHCP server and
give all the needed information to the guest)
o it guarantees that the VM can be executed in any network environment without breaking the
existing network.

• However it's really hard to configure NAT to let the VM to act as a server (e.g. as NFS or TFTP
server), for this reason the developer usually choose a bridged configuration, with proper IP parameter
assignments.
• The Network Address Translation (NAT) service works in a similar way to a home router, grouping
the systems using it into a network and preventing systems outside of this network from directly
accessing systems inside it, but letting systems inside communicate with each other and with systems
outside using TCP and UDP over IPv4 and IPv6.

Procedure:
Requirement: Two Virtual machines installed, for this case we have Ubuntu 21 and Kali Linux.
1. Create a NAT network in which 2 virtual machine can communicate.
• Go to preferences by clicking File option in Top.

• Now select the network option and create a new NAT network

• After creating a NAT network, now go to virtual machine setting by right clicking on the preferred
machine.


• Now go to Network and change the attached option to “NAT network” and select the network we
created earlier.


• Now repeat the same process for another machine.
2. Launch both virtual machines
• Now install “Net-tools” on both machine which will help to identify i/p address of the machine.
Command: sudo apt install net-tools

• Now create a file in Home folder using any text editor. Here we have used “Test_file.txt” and will
transfer from Kali Linux (Right Machine) to Ubuntu (left Machine).

• Now we can check i/p address of Ubuntu where we want to transfer the file using “ ifconfig ”
command. Here Ubuntu has i/p address 10.0.2.4.

• Transfer the file using command- scp Test_file.txt raghav@10.0.2.4:

Where Test_file.txt is our file
raghav is username of Ubuntu


10.0.2.4 is ip address of Ubuntu (left machine)

Optional: if scp is not installed then install by using command:
sudo apt install openssh-server

• Now enter the password for Ubuntu(left machine) admin, after enter the password, the file will be
sent from Kali Linux(Right machine) to Ubuntu (Left machine)