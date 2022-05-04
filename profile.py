# Import the Portal object.
import geni.portal as portal
# Import the ProtoGENI library.
import geni.rspec.pg as pg

# Create a portal context.
pc = portal.Context()

# Create a Request object to start building the RSpec.
request = pc.makeRequestRSpec()
 
# Add a raw PC to the request.
node = request.RawPC("node")

# Install and execute a script that is contained in the repository.
node.addService(pg.Execute(shell="sh", command="/local/repository/silly.sh"))
# setup Docker
node.addService(pg.Execute(shell="sh", command="sudo bash /local/repository/install_docker.sh"))
# setup Kubernetes
node.addService(pg.Execute(shell="sh", command="sudo bash /local/repository/install_kubernetes.sh"))
node.addService(pg.Execute(shell="sh", command="sudo swapoff -a"))

# Print the RSpec to the enclosing page.
pc.printRequestRSpec(request)

  
  
